server {
        listen 80 default_server;
        listen [::]:80 default_server;

        root /var/www/skbpobedit.ru/html;
        index pusk.html;

        server_name skbpobedit.ru www.skbpobedit.ru;

        location / {
                try_files $uri $uri/ =404;
        }
}
