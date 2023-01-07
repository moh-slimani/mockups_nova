<?php

namespace App\Nova\Dashboards;

use App\Nova\Metrics\TotalProjects;
use App\Nova\Metrics\TotalUsers;
use Laravel\Nova\Cards\Help;
use Laravel\Nova\Dashboards\Main as Dashboard;

class Main extends Dashboard
{
    /**
     * Get the cards for the dashboard.
     *
     * @return array
     */
    public function cards(): array
    {
        return [
            TotalUsers::make(),
            TotalProjects::make(),
            new Help,
        ];
    }
}
