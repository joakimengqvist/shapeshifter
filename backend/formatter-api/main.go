package main

import (
	"github.com/gin-gonic/gin"
)

var db = make(map[string]string)

type dataPayload interface {
	any
}
type incomingData struct {
	FromFormat  string      `json:"fromFormat"`
	ToFormat    string      `json:"toFormat"`
	DataPayload dataPayload `json:"dataPayload"`
}

func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {

		c.Header("Access-Control-Allow-Origin", "*")
		c.Header("Access-Control-Allow-Credentials", "true")
		c.Header("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Header("Access-Control-Allow-Methods", "POST, HEAD, PATCH, OPTIONS, GET, PUT, POST")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	}
}

func setupRouter() *gin.Engine {
	// Disable Console Color
	// gin.DisableConsoleColor()
	router := gin.Default()
	router.Use(CORSMiddleware())

	router.POST("/data-formatter", dataFormatter)

	return router
}

func main() {
	r := setupRouter()
	r.Run(":3000")
}
