const RequestMethod = {
    POST: "POST"
}

function getHostedUrl() {

    return "http://localhost:3000"
}

function randomNumberGenerator(to: number): number {

    return Math.floor(Math.random() * to);
}

export { RequestMethod, getHostedUrl, randomNumberGenerator };
