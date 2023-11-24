<?php

declare(strict_types=1);

namespace KataTests;

use Kata\LeapYear;
use PHPUnit\Framework\TestCase;

final class LeapYearTest extends TestCase
{
    /**
     * Implementar un método que compruebe si un año es bisiesto o no,
     * el cual debe satisfacer las siguientes reglas:
     *
     * - Un año NO ES bisiesto si NO es divisible por 4.
     * - Un año ES bisiesto si es divisible por 4.
     * - Un año ES bisiesto si es divisible por 400.
     * - Un año NO ES bisiesto si es divisible por 100, pero NO por 400.
     *
     * Ejemplos:
     *
     * - 3 NO ES bisiesto (puesto que NO ES divisible por 4).
     * - 8 ES bisiesto (puesto que ES divisible por 4).
     * - 1600 ES bisiesto (puesto que ES divisible por 400).
     * - 1800 NO ES bisiesto (es divisible por 4, pero puesto que es divisible por 100 pero NO por 400, NO es bisiesto).
     */

    /** @test */
    public function assert_not_divisible_by_4(): void
    {
        $leapYear = new LeapYear();

        $result = $leapYear->isLeap(3);

        self::assertFalse($result);
    }

    /**
     * @test
     * @dataProvider leapYearDivisibleBy4
     */
    public function assert_is_divisible_by_4(int $year): void
    {
        $leapYear = new LeapYear();

        $result = $leapYear->isLeap($year);

        self::assertTrue($result);
    }

    public static function leapYearDivisibleBy4(): iterable
    {
        yield '8' => ['year' => 8];
        yield '12' => ['year' => 12];
        yield '16' => ['year' => 16];
    }

    /** @test */
    public function assert_1800_is_not_leap_when_is_divisible_by_100_but_not_by_400(): void
    {
        $leapYear = new LeapYear();

        $result = $leapYear->isLeap(1800);

        self::assertFalse($result);
    }

    /** @test */
    public function assert_2100_is_not_leap_when_is_divisible_by_100_but_not_by_400(): void
    {
        $leapYear = new LeapYear();

        $result = $leapYear->isLeap(2100);

        self::assertFalse($result);
    }
}
