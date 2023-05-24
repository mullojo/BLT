# BLT 🥪
bitcoind lnd tapd

In three terminal windows, cd to `core`, `lnd`, and `tapd`

Build the images from each Dockerfiles:
```console
docker build -t core .
docker build -t lnd .
docker build -t tapd .
```

Run each container with Docker Compose:
```console
docker compose up -d
```

Inspect the `party` Docker bridge network created

```console
docker network inspect party
```