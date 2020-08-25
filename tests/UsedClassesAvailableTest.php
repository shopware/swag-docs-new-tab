<?php declare(strict_types=1);

namespace Swag\NewTabTests;

use Shopware\Core\Framework\Test\TestCaseBase\IntegrationTestBehaviour;
use PHPUnit\Framework\TestCase;
use Symfony\Component\Finder\Finder;

class UsedClassesAvailableTest extends TestCase
{
    use IntegrationTestBehaviour;

    public function testClassesAreInstantiable(): void
    {
        $files = $this->getPluginClasses();

        static::assertCount(6, $files);
    }

    private function getPluginClasses(): Finder
    {
        $finder = new Finder();
        $finder->in(realpath(__DIR__ . '/../src'));

        return $finder->files()->name('/(.*.js$)|(.*.twig$)/');
    }
}
