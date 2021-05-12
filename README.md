# RTMPie

RTMPie is a management web interface for the RTMP NGINX module.

<p align="center">
  <img src="https://img.rtmpie.de/screen.png" alt="RTMPie screenshot">
</p>

### Features

- Get information about streams (live/offline, viewer count) in realtime
- Simple user management
- Stream key management to prevent unauthorized clients from streaming to the server
- Kick the current publisher from a stream
- Integrated stream player
- Stream recording (coming soon)
- Restrict stream playback to authenticated users (coming soon)

## Installation

The official installation method is using [Docker](https://docs.docker.com/engine/install/) and [Docker Compose](https://docs.docker.com/compose/).

### Clone the repository

```
git clone https://github.com/SamuelNitsche/rtmpie.git
```

### Build all containers

```
cd rtmpie
docker-compose -f ./docker/docker-compose.prod.yaml build
```

### Launch 🚀

```
docker-compose -f ./docker/docker-compose.prod.yaml up -d
```

### Open the admin interface

The admin interface is publicly available via port 8080. You can login with the default user `admin` and the password `admin`.

## Usage

### Watch the stream

You can either watch the stream by clicking on the preview image on the admin interface. If you want to embed the stream anywhere else you can access the .m3u8 file via the following url.

**{slug} has to be replaced by the stream name**

```
http://127.0.0.1:8080/live/{slug}/index.m3u8
```

## Credits

RTMPie was built using the following projects:

- [nginx-http-flv-module](https://github.com/winshining/nginx-http-flv-module) (thanks to [arut](https://github.com/arut) for creating the original module and [winshining](https://github.com/winshining) for maintaining the further developed fork)
- [Symfony](https://symfony.com) and [API Platform](https://api-platform.com)
- [Vue.js](https://vuejs.org)
- [Tailwind CSS](https://tailwindcss.com) and [Tailwind UI](https://tailwindui.com)
