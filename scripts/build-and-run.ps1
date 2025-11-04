param(
    [string]$ImageName = "yourusername/min-app",
    [int]$Port = 3000
)
docker build -t $ImageName ./docker-app
docker run -p $Port:3000 --rm $ImageName
