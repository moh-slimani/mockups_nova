<?php

namespace App\Nova\Dashboards;

use App\Nova\Metrics\TotalUsers;
use Laravel\Nova\Dashboard;

class UserInsights extends Dashboard
{
    /**
     * Get the cards for the dashboard.
     *
     * @return array
     */
    public function cards()
    {
        return [
            TotalUsers::make(),
            //UsersOverTime::make(),
        ];
    }

    /**
     * Get the URI key for the dashboard.
     *
     * @return string
     */
    public function uriKey()
    {
        return 'user-insights';
    }
}
