package main

import (
	"encoding/xml"
	"fmt"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
)

type dataOutput string

func (d dataOutput) addData(data dataOutput) dataOutput {
	returnedData := d + data
	return returnedData
}

func dataFormatter(c *gin.Context) {
	var data incomingData
	// var returnedData dataOutput

	if err := c.BindJSON(&data); err != nil {
		return
	}

	var payload = data.DataPayload
	var fromFormat = data.FromFormat
	var toFormat = data.ToFormat

	if fromFormat == "json" {
		log.Printf("FROM JSON")

		if toFormat == "xml" {
			log.Printf("TO XML")

			output, err := xml.MarshalIndent(payload, "  ", "    ")
			fmt.Printf("Output: %+v", output)
			if err != nil {
				fmt.Printf("Error: %+v\n", err)
			}

			c.IndentedJSON(http.StatusCreated, output)
			c.XML(201, output)

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
