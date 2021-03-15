<?php

namespace App\Passport;

use Laravel\Passport\Client as BaseClient;

/**
 * @property-read string $client_id
 */
class Client extends BaseClient
{
    /**
     * Determine if the client should skip the authorization prompt.
     *
     * @return bool
     */
    public function skipsAuthorization()
    {
        return true;
    }
}
