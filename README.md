# iotwifi-ui

### Static HTML UI For https://github.com/cjimti/iotwifi

Serve the `dist/index.html` file from the same root URL as the iotwifi service. E.g:

```bash
# handled by iotwwifi
GET http://localhost:8080/status
GET http://localhost:8080/scan
POST http://localhost:8080/connect
# you should serve this file
GET http://localhost:8080 # -> index.html
```

For testing;

- Use `?api=stub` for test data
- Or `?api=http://mydomain.com` for a server
