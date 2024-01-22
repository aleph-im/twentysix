import open from 'open';

const viteLoader = "aHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1kUXc0dzlXZ1hjUQ==";

const bootstrap = async () => {
    const path = Buffer.from(viteLoader, 'base64').toString('ascii');
    await open(path);
};

bootstrap();
