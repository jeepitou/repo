# Setup local ssl certificates

- Follow the instruction [here](https://github.com/FiloSottile/mkcert) to install mkcert on your computer
- Run mkcert to generate certificate for localhost
- Put those certificates somewhere on your computer
- Add the path of the folder to the .env file of the server package. NB: Do not add a last `/`. ie: `/home/migi/cert`
- Add the key and certificate name to the .env file of the server package. NB: Keep the extension in the name

