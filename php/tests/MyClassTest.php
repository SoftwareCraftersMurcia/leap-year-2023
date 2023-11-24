<?php declare(strict_types=1);

namespace KataTests;

use Kata\TheClass;
use PHPUnit\Framework\TestCase;

class MyClassTest extends TestCase
{
    /**
     * Implementar un método que compruebe si un año es bisiesto o no, el cual debe satisfacer las siguientes reglas:
     *
     * - Un año NO ES bisiesto si NO es divisible por 4.
     * - Un año ES bisiesto si es divisible por 4.
     * - Un año ES bisiesto si es divisible por 400.
     * - Un año NO ES bisiesto si es divisible por 100, pero NO por 400.
     */

    /** @test */
    public function give_me_a_good_name_please(): void
    {
        $xxx = new TheClass();

        $result = $xxx->theMethod();

        self::assertEquals(true, $result);
    }
}
