param(
    [string]$ImageName = "yourusername/min-app"
)
docker login
docker push $ImageName
