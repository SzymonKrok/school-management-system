import { Client } from 'pg';

export async function createDatabaseIfNotExists() {
    // Ustawienia połączenia do PostgreSQL (bez nazwy bazy danych)
    const client = new Client({
        host: 'localhost',
        port: 5432,
        user: 'postgres',
        password: '1234',
    });

    try {
        // Nawiązywanie połączenia
        await client.connect();

        // Sprawdzanie, czy baza danych istnieje
        const dbName = 'edziennik';
        const result = await client.query(
            `SELECT 1 FROM pg_database WHERE datname = $1`,
            [dbName]
        );

        // Jeśli baza danych nie istnieje, utwórz ją
        if (result.rowCount === 0) {
            await client.query(`CREATE DATABASE ${dbName}`);
            console.log(`Database '${dbName}' has been created.`);
        } else {
            console.log(`Database '${dbName}' already exists.`);
        }
    } catch (error) {
        console.error('Error while checking/creating the database:', error);
    } finally {
        // Zamknięcie połączenia
        await client.end();
    }
}

createDatabaseIfNotExists();
