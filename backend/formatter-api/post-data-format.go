package main

import (
	"github.com/gin-gonic/gin"
)

type dataOutput string

func dataFormatter(c *gin.Context) {
	var data incomingData

	if err := c.BindJSON(&data); err != nil {
		return
	}

	// var payload = data.DataPayload
	var fromFormat = data.FromFormat
	var toFormat = data.ToFormat

	if fromFormat == "json" {

		if toFormat == "xml" {

		}

		if toFormat == "soap" {

		}
	}

	if fromFormat == "xml" {

		if toFormat == "json" {

		}

		if toFormat == "soap" {

		}
	}

	if fromFormat == "soap" {

		if toFormat == "json" {

		}

		if toFormat == "xml" {

		}
	}

	// c.IndentedJSON(http.StatusCreated, "{ 'dataPayload': 'fileformat not supported' }")
}
