<?php

namespace App\Providers;

use App\Passport\Client;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Laravel\Passport\Passport;
use Laravel\Passport\RouteRegistrar;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        // 'App\Models\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();
        $this->registerPassport();
    }

    /**
     * Register the services needed for the Passport authentication library.
     *
     * @return void
     */
    protected function registerPassport()
    {
        Passport::routes(function (RouteRegistrar $router) {
            $router->forAuthorization();
            $router->forAccessTokens();
            $router->forTransientTokens();
        });

        Passport::hashClientSecrets();
        Passport::cookie('api_token');
        Passport::tokensExpireIn(now()->addHour());
        Passport::refreshTokensExpireIn(now()->addWeek());
        Passport::useClientModel(Client::class);
    }
}
