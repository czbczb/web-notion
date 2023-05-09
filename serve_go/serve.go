package main

import (
	"fmt"
	"io"
    "time"

    "github.com/gin-gonic/contrib/static"
    "github.com/gin-gonic/gin"
    "github.com/mattn/go-colorable"
)

func main() {
	r := gin.Default()

	r.POST("/stream", func(c *gin.Context) {
		c.Header("Content-Type", "text/event-stream")
		c.Header("Cache-Control", "no-cache")

		for i := 0; i < 10; i++ {
			time.Sleep(time.Second)
			data := fmt.Sprintf("data: %d\n\n", i)
			if _, err := c.Writer.WriteString(data); err != nil {
				return
			}
			c.Writer.Flush()
		}
	})
	r.GET("/streamV2", func(c *gin.Context) {
		c.Header("Content-Type", "text/event-stream")
		c.Header("Cache-Control", "no-cache")

		for i := 0; i < 10; i++ {
			time.Sleep(time.Second)
			data := fmt.Sprintf("data: %d\n\n", i)
			if _, err := c.Writer.WriteString(data); err != nil {
				return
			}
			c.Writer.Flush()
		}
	})

	r.GET("/streamv3", func(c *gin.Context) {
        chanStream := make(chan int, 10)
        go func() {
            defer close(chanStream)
            for i := 0; i < 5; i++ {
                chanStream <- i
                time.Sleep(time.Second * 1)
            }
        }()
        c.Stream(func(w io.Writer) bool {
            if msg, ok := <-chanStream; ok {
                c.SSEvent("message", msg)
                return true
            }
            return false
        })
    })

	if err := r.Run(":8081"); err != nil {
		panic("Failed to start server: " + err.Error())
	}
}