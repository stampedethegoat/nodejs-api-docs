api_key=<YOUR_API_KEY>
app_key=<YOUR_APP_KEY>

curl -G "https://api.datadoghq.com/api/v1/search" \
    -d "api_key=${api_key}" \
    -d "application_key=${app_key}" \
    -d "q=test"