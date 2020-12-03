
const imageCarnet = {
    carnetImage: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM6c3ZnanM9Imh0dHA6Ly9zdmdqcy5jb20vc3ZnanMiIHZlcnNpb249IjEuMSIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiIHg9IjAiIHk9IjAiIHZpZXdCb3g9IjAgMCAxNjkuMzQ1IDE2OS4zNDYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTE0Ny41NzcsNzcuMDcySDczLjAyMWMtMS43OTMsMC0zLjI0MiwxLjQ0Ni0zLjI0MiwzLjI0NWMwLDEuNzkxLDEuNDQ5LDMuMjUyLDMuMjQyLDMuMjUyaDc0LjU1NiAgICBjMS43OTYsMCwzLjIzOS0xLjQ1NSwzLjIzOS0zLjI1MkMxNTAuODE2LDc4LjUyNCwxNDkuMzY3LDc3LjA3MiwxNDcuNTc3LDc3LjA3MnoiIGZpbGw9IiM0ODQ1NDUiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiLz4KCQk8cGF0aCBkPSJNMTQ3LjU3Nyw5MS44NjNINzMuMDIxYy0xLjc5MywwLTMuMjQyLDEuNDQ5LTMuMjQyLDMuMjUxYzAsMS44MDMsMS40NDksMy4yNDUsMy4yNDIsMy4yNDVoNzQuNTU2ICAgIGMxLjc5NiwwLDMuMjM5LTEuNDQyLDMuMjM5LTMuMjQ1QzE1MC44MTYsOTMuMzE4LDE0OS4zNjcsOTEuODYzLDE0Ny41NzcsOTEuODYzeiIgZmlsbD0iIzQ4NDU0NSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiIvPgoJCTxwYXRoIGQ9Ik0xNDcuNTc3LDEwNi42NjZoLTM3LjI3N2MtMS44MDMsMC0zLjI1MiwxLjQ1NS0zLjI1MiwzLjI1MXMxLjQ0OSwzLjI0NSwzLjI1MiwzLjI0NWgzNy4yNzcgICAgYzEuNzk2LDAsMy4yMzktMS40NDIsMy4yMzktMy4yNDVDMTUwLjgxNiwxMDguMTE1LDE0OS4zNjcsMTA2LjY2NiwxNDcuNTc3LDEwNi42NjZ6IiBmaWxsPSIjNDg0NTQ1IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIi8+CgkJPHBhdGggZD0iTTUwLjgxNyw5Ni42MjVjNC41NTItMy4wNTgsNy42OS05LjEwNCw3LjY5LTE0LjU0MmMwLTcuNjc1LTYuMjE3LTEzLjkwNS0xMy44OTgtMTMuOTA1ICAgIGMtNy42NzUsMC0xMy44OTgsNi4yMjktMTMuODk4LDEzLjkwNWMwLDUuNDM4LDMuMTM2LDExLjQ4NCw3LjY3NSwxNC41NDJjLTEwLjg3NSwyLjc1OC0xOC45NDksMTIuMjI3LTE4Ljk0OSwxOS4yMjkgICAgYzAsOC4yODEsNTAuMzM2LDguMjgxLDUwLjMzNiwwQzY5Ljc3OSwxMDguODUyLDYxLjcxLDk5LjM4Myw1MC44MTcsOTYuNjI1eiBNNDQuNjA5LDEyMi4wNTlsLTcuMDYtNy4wNDVsNS45MzctMTQuMzU4aC0wLjA2NCAgICBsLTIuMjk4LTIuNjQ4YzEuMTIxLDAuNDAxLDIuMjY4LDAuNjUxLDMuNDg2LDAuNjUxYzEuMjE1LDAsMi4zNjMtMC4yMzcsMy40ODMtMC42NGwtMi4zMDUsMi42MzdoLTAuMDU4bDUuOTQzLDE0LjM1OCAgICBMNDQuNjA5LDEyMi4wNTl6IiBmaWxsPSIjNDg0NTQ1IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIi8+CgkJPHBhdGggZD0iTTE0OS4xODQsMzcuOTY4aC0yNy44MTVjLTAuMzUzLTEuNzAyLTIuMTE5LTMuNzctNS40NTYtNi4wMjJsLTE1LjcxNi0xMC41NjJjLTguNTQzLTUuNzQyLTIyLjUxMi01Ljc0Mi0zMS4wNDUsMCAgICBMNTMuNDMyLDMxLjk0NWMtMy4zMzcsMi4yNDQtNS4xMDMsNC4zMTQtNS40NTYsNi4wMjJIMjAuMTY0QzkuMDQyLDM3Ljk2OCwwLDQ3LjAwNCwwLDU4LjEyM3Y3My45ODkgICAgYzAsMTEuMTE4LDkuMDQyLDIwLjE1NSwyMC4xNjQsMjAuMTU1aDEyOS4wMmMxMS4xMTksMCwyMC4xNjEtOS4wMzcsMjAuMTYxLTIwLjE1NVY1OC4xMjMgICAgQzE2OS4zNDUsNDcuMDA0LDE2MC4zMDMsMzcuOTY4LDE0OS4xODQsMzcuOTY4eiBNODQuNjY5LDIzLjQxNWM0LjczMSwwLDguNTczLDMuODM2LDguNTczLDguNTc0YzAsNC43NC0zLjg0Miw4LjU3My04LjU3Myw4LjU3MyAgICBjLTQuNzMxLDAtOC41NzMtMy44MzMtOC41NzMtOC41NzNDNzYuMDk2LDI3LjI1MSw3OS45MzgsMjMuNDE1LDg0LjY2OSwyMy40MTV6IE0xNjEuMjc3LDEzMi4xMTIgICAgYzAsNi42NjctNS40MjUsMTIuMDkzLTEyLjA5MywxMi4wOTNIMjAuMTU4Yy02LjY3MSwwLTEyLjA5Ni01LjQyNi0xMi4wOTYtMTIuMDkzVjU4LjEyM2MwLTYuNjY4LDUuNDI1LTEyLjA5NCwxMi4wOTYtMTIuMDk0ICAgIGgxMjkuMDE0YzYuNjc0LDAsMTIuMDk5LDUuNDI2LDEyLjA5OSwxMi4wOTR2NzMuOTg5SDE2MS4yNzd6IiBmaWxsPSIjNDg0NTQ1IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIi8+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPgo='
}

export default imageCarnet; 