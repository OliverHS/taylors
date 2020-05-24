package v1

import (
	"fmt"
	"gin-vue-admin/global/response"
	"gin-vue-admin/model/request"
	resp "gin-vue-admin/model/response"
	"gin-vue-admin/service"
	"github.com/gin-gonic/gin"
)

type stockAll int

// @Tags Stock
// @Summary 获取监控列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.AllDetailListReq true "获取监控列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /stock/all/list [post]
func (*stockAll) StockAllDetailList(c *gin.Context) {
	var req request.AllDetailListReq
	if err := c.ShouldBindJSON(&req); err != nil {
		response.FailWithMessage(fmt.Sprintf("参数错误，%v", err), c)
		return
	}

	stockList, err := service.StockAllService.AllDetailList(req.PageNum, req.PageSize)
	if err != nil {
		response.FailWithMessage(fmt.Sprintf("获取失败，%v", err), c)
	} else {
		response.OkWithData(resp.PageResult{
			List:     stockList,
			Total:    len(stockList),
			Page:     1,
			PageSize: len(stockList),
		}, c)
	}
}