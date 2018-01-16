<?php

namespace Bolt\Extension\Bolt\Robots;

use Bolt\Extension\SimpleExtension;
use Silex\Application;
use Silex\ControllerCollection;
use Symfony\Component\HttpFoundation\ParameterBag;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

/**
 * Robots extension loader class.
 *
 * @author Gawain Lynch <gawain.lynch@gmail.com>
 */
class RobotsExtension extends SimpleExtension
{
    /**
     * Route for /robots.txt
     *
     * @param Application $app
     *
     * @return Response
     */
    public function robotsTxt(Application $app)
    {
        $config = $this->getConfig();
        if ($config['enabled'] === false) {
            return null;
        }

        $rules = false;
        if ($config['cache']) {
            $rules = $app['cache']->fetch('bolt.robots.txt');
        }
        if ($rules === false) {
            $rules = $this->compileRobotsTxt($config['rules'], $config['sitemap']);
            $app['cache']->save('bolt.robots.txt', $rules, 3600);
        }

        return $rules;
    }

    /**
     * @param array $rules
     * @param boolean|string $sitemap
     *
     * @return Response
     */
    protected function compileRobotsTxt(array $rules, $sitemap)
    {
        $render = '';
        foreach ($rules as $key => $value) {
            $render .= "User-agent: $key\n";
            $disallows = new ParameterBag((array) $value);
            foreach ($disallows->all() as $disallow) {
                $render .= sprintf("Disallow: %s\n", (string) $disallow);
            }
            $render .= "\n";
        }

        if ($sitemap !== null) {
            $render .= sprintf("Sitemap: %s\n", (string) $sitemap);
        }

        $response = new Response($render);
        $response->headers->set('Content-Type', 'text/plain');

        return $response;
    }

    /**
     * {@inheritdoc}
     */
    protected function registerFrontendRoutes(ControllerCollection $collection)
    {
        $collection
            ->get('robots.txt', [$this, 'robotsTxt'])
            ->method(Request::METHOD_GET)
            ->bind('robots.txt')
        ;
    }

    /**
     * {@inheritdoc}
     */
    protected function getDefaultConfig()
    {
        return [
            'enabled' => true,
            'cache'   => true,
            'rules'   => [],
            'sitemap' => null
        ];
    }
}
