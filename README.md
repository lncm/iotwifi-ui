# Wifi Selector

## Static HTML UI For https://github.com/cjimti/iotwifi

```
	r.HandleFunc("/status", statusHandler)
	r.HandleFunc("/connect", connectHandler).Methods("POST")
	r.HandleFunc("/scan", scanHandler)
	r.HandleFunc("/kill", killHandler)
```
