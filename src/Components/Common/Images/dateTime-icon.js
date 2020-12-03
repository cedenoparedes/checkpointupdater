const dateTimeIcon = {
    dateTimeIcon: "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNjYuODYgMjYzLjUxIj48ZyBpZD0iSzQ5bms4LnRpZiI+PHBhdGggZD0iTTIzOC4yOCwyMDEuNGMtLjY5LDEuOTUtMS4zMSwzLjkzLTIuMDgsNS44NUE0OS42MSw0OS42MSwwLDAsMSwxODksMjM4LjE3Yy0yNC4yOS0uNTgtNDEuMzktMTcuNzctNDYuMS0zNS4xNC00LjkyLTE4LjEzLTEuNTQtMzQuNjUsMTEuNzEtNDguNTMsMTEuMTItMTEuNjQsMjQuOS0xNi42NCw0MC44NC0xNSwyMC4yLDIsMzYuNzYsMTYuMTksNDIuNTIsMzUuOGE2LjQsNi40LDAsMCwwLC4yNy42OFptLTQ4LjA2LDIyLjg4YTM1LjUsMzUuNSwwLDAsMCwzNS42Ni0zNS41NWMuMjItMTkuNTItMTYuNDktMzYtMzYuMDktMzUuNi0xOS4yNS40MS0zNS4xNCwxNi4xMi0zNS4wOCwzNS40QTM1LjU2LDM1LjU2LDAsMCwwLDE5MC4yMiwyMjQuMjhaIi8+PHBhdGggZD0iTTExOS4yMyw5Ni4yOUg0M2MtMi4wNiwwLTEuODktLjI5LTEuODgsMS44M3EwLDI0LjIzLjA5LDQ4LjQzYzAsMTQuNzcuMDksMjkuNTQuMSw0NC4zMWE3LjgzLDcuODMsMCwwLDAsMSwzLjksMTgsMTgsMCwwLDAsOC40LDcuNzEsMy40NiwzLjQ2LDAsMCwwLDEuNTkuMnE0MC42Mi4xMiw4MS4yNS4yYzEuMjQsMCwxLjgyLjMsMi4xNSwxLjU0YTU5LjIsNTkuMiwwLDAsMCw0LjU0LDExLjQ2Yy42MywxLjI2LjYxLDEuMjktLjc0LDEuMjhMODkuNzksMjE3Yy0xMC41NywwLTIxLjE0LS4wNi0zMS43LS4yMS0zLjU2LS4wNS03LjIuMjctMTAuNjUtLjg5QTI5LjU4LDI5LjU4LDAsMCwxLDI4LjgxLDE5OC41YTMuNzQsMy43NCwwLDAsMS0uMjMtMS40N3EwLTY4Ljc4LDAtMTM3LjU1YTkuNDYsOS40NiwwLDAsMSwxLjkxLTQuOTNDMzUsNDcuNDEsNDAuODUsNDIuMSw0OS4zMyw0MC4yN2MxLjU0LS4zMywzLjE0LS40Miw0LjY5LS43Ljg4LS4xNywxLC4xNywxLjA5LDEsLjMsNC4zNi4yLDguNzMuMTgsMTMuMWExMy4zNSwxMy4zNSwwLDAsMCw0LjY1LDEwLjYzYzcsNiwxOC40OCw0Ljc3LDIyLjkxLTUuNDJhMTEuMzgsMTEuMzgsMCwwLDAsLjY0LTQuNDJjLjA5LTQuNjIuMTktOS4yMy4yMi0xMy44NSwwLTEsLjMtMS4xOCwxLjIxLTEuMThxOS40OS4wNiwxOSwwYy44OSwwLDEuMS4zLDEuMTEsMS4xNSwwLDQuNjEuMjgsOS4yMy4xOSwxMy44NS0uMTQsNi44OSw1LjYxLDEyLjQ1LDExLjc2LDEzLjIyLDYuNTguODMsMTItMS44MywxNS4xNC03LjY2YTkuODIsOS44MiwwLDAsMCwxLjA5LTQuNTZjLjA5LTQuOTEuMi05LjgyLjI0LTE0LjczLDAtMSwuMjYtMS4yOCwxLjI2LTEuMjdxOS40Mi4wNiwxOC44NSwwYzEsMCwxLjI1LjM0LDEuMjQsMS4yOSwwLDQuNjEtLjA3LDkuMjQuMDksMTMuODVhMTMuNzcsMTMuNzcsMCwwLDAsMTIuMTksMTMuMmM3LjY2LDEsMTQuODQtNC4wOSwxNS45Mi0xMS4zNGE1NC44OSw1NC44OSwwLDAsMCwuMTgtNy40OGMwLTIuODMsMC01LjY2LDAtOC40OSwwLS42My4wNi0xLC44OS0uOTIsOS4yLjgzLDE2LjczLDQuNjgsMjIuMiwxMi4yNGEyNC40OSwyNC40OSwwLDAsMSw0Ljg5LDEzLjg5Yy40MSwxMy44OS4zLDI3Ljc5LjQxLDQxLjY4LjA3LDksLjA2LDE4LjA2LjEyLDI3LjA5LDAsMS4xLS4yLDEuMzItMS4zMS45NWE2Miw2MiwwLDAsMC0xMS42OS0zYy0xLS4xMy0xLjI4LS41MS0xLjI4LTEuNDksMC05LjI4LDAtMTguNTYsMC0yNy44NCwwLTEuNzEtLjA4LTMuNDIsMC01LjEyLjA2LTEuMjEtLjI0LTEuNjItMS41Ni0xLjYxLTExLjk0LDAtMjMuODgsMC0zNS44MiwwWiIvPjxwYXRoIGQ9Ik0xMTkuMDksMTY3LjcxYzIuNjYsMCw1LjMyLS4xMSw4LDBhNiw2LDAsMCwxLDUuOTMsNS42MywzOS44NywzOS44NywwLDAsMSwwLDkuMmMtLjQxLDMuNDctMi41Nyw1LjY0LTYuMDcsNS43OS01LjE0LjIxLTEwLjMuMjItMTUuNDUsMGE2LjE2LDYuMTYsMCwwLDEtNi01LjU5LDM3Ljg0LDM3Ljg0LDAsMCwxLS4xOS05Yy4yMi0yLjYzLDIuOTEtNi4yNyw2LjYtNi4xNiwyLjQxLjA3LDQuODIsMCw3LjIzLDBaIi8+PHBhdGggZD0iTTc2LjUzLDE4OC40MWMtMi44Ni0uMDYtNS43NC4yOS04LjU4LS4yYTUuNjUsNS42NSwwLDAsMS00Ljg1LTQuMjksMjYuNDIsMjYuNDIsMCwwLDEtLjI4LTExQTYuNzIsNi43MiwwLDAsMSw2OSwxNjcuNjdhMTQzLjg0LDE0My44NCwwLDAsMSwxNC44MywwYzQuMi4yLDYuNDUsMi41Myw2LjY0LDYuNzEuMTEsMi40Ni4xMiw0LjkxLDAsNy4zNi0uMjIsNC4xMy0yLjYxLDYuNTItNi43Myw2LjYzQzgxLjM2LDE4OC40Niw3OSwxODguNDEsNzYuNTMsMTg4LjQxWiIvPjxwYXRoIGQ9Ik0xMTkuMDYsMTM5LjI4YzIuNjUsMCw1LjMyLS4xMiw4LDAsMy40Ni4yLDUuNTcsMi4yNyw2LDUuNzJhMzkuMzIsMzkuMzIsMCwwLDEsMCw5LjIsNiw2LDAsMCwxLTUuOSw1LjY3Yy01LjIzLjI2LTEwLjQ3LjIzLTE1LjcsMGE2LjE2LDYuMTYsMCwwLDEtNi01LjU1LDM4LjI5LDM4LjI5LDAsMCwxLS4xOS05Yy4yMy0yLjc5LDMtNi4zMSw2LjU3LTYuMiwyLjQxLjA4LDQuODIsMCw3LjIzLDBaIi8+PHBhdGggZD0iTTc2LjUyLDEzOS4yNWMyLjUzLDAsNS4wNy0uMDksNy42LDAsMy41OS4xNiw1Ljg0LDIuMTgsNi4yNiw1LjcyYTM1LjY2LDM1LjY2LDAsMCwxLS4wNiw5LjU3LDYsNiwwLDAsMS01Ljk1LDUuMzRjLTUuMTQuMjItMTAuMy4yMS0xNS40NSwwYTYuMDksNi4wOSwwLDAsMS02LjA1LTUuMjksMzAuMDksMzAuMDksMCwwLDEtLjEtOS45M0E2LjcyLDYuNzIsMCwwLDEsNjksMTM5LjI1YzIuNDktLjA3LDUsMCw3LjQ4LDBaIi8+PHBhdGggZD0iTTE2MS44MiwxMzEuNTJjLTIuMzYsMC00LjczLDAtNy4xLDAtMy45My0uMS02LjM0LTIuMzMtNi43Ni02LjI1YTM5Ljc3LDM5Ljc3LDAsMCwxLS4wOS04LjA5LDcsNywwLDAsMSw2LjY1LTYuMzdjNC44Mi0uMjMsOS42NC0uMTgsMTQuNDYsMCw0LjMxLjE4LDYuNTQsMi40Myw2Ljc5LDYuNzFhNDcsNDcsMCwwLDEtLjEsOC4yMiw2LjEyLDYuMTIsMCwwLDEtNi4yNCw1Ljc2QzE2Ni45LDEzMS41OCwxNjQuMzYsMTMxLjUyLDE2MS44MiwxMzEuNTJaIi8+PHBhdGggZD0iTTc2LjYzLDEzMS41MmMtMi40NSwwLTQuOSwwLTcuMzUsMGE2LjI5LDYuMjksMCwwLDEtNi41LTUuODEsMzUuNzEsMzUuNzEsMCwwLDEtLjE1LTguNTgsNi44Niw2Ljg2LDAsMCwxLDYuNjctNi4zNGM0LjctLjIxLDkuMzktLjE0LDE0LjA5LDBhNy43Myw3LjczLDAsMCwxLDMuMjkuNjEsNS45NCw1Ljk0LDAsMCwxLDMuNjYsNC44MiwzOS44MywzOS44MywwLDAsMSwwLDkuODIsNiw2LDAsMCwxLTYuMSw1LjQ1Yy0yLjUzLjA5LTUuMDYsMC03LjYsMFoiLz48cGF0aCBkPSJNMTE5LjIxLDEzMS41MmMtMi40MSwwLTQuODIsMC03LjIzLDAtMy43LS4wOC02LTIuMi02LjU3LTUuODhhNDAuMzUsNDAuMzUsMCwwLDEtLjE2LTguNThjLjItMi44OSwzLjA3LTYuMjYsNi40OS02LjMxLDQuOTEtLjA2LDkuODEtLjE2LDE0LjcxLjA3LDQuMTEuMTksNi4yNiwyLjIyLDYuNjIsNi4zMWE0MC4yNiw0MC4yNiwwLDAsMS0uMDcsOC43MSw2LjA2LDYuMDYsMCwwLDEtNi4xOSw1LjY1Yy0yLjUzLjA4LTUuMDcsMC03LjYsMFoiLz48cGF0aCBkPSJNMTc1Ljc3LDQzVjUzLjc0YTYuMjQsNi4yNCwwLDAsMS0zLjkzLDYuMSw3LDcsMCwwLDEtNy41OS0xLDUuNDgsNS40OCwwLDAsMS0xLjg5LTMuOTMsODIuNDIsODIuNDIsMCwwLDEtLjM2LTguNDZjLS4xMy00LjctLjEyLTkuMzkuMTEtMTQuMDhhNy4zNyw3LjM3LDAsMCwxLDQuOTQtNi42Nyw3LjE1LDcuMTUsMCwwLDEsOC44Niw2LjUyQTc1LjQ0LDc1LjQ0LDAsMCwxLDE3NS43Nyw0M1oiLz48cGF0aCBkPSJNMTI2LjE5LDQzLjMyYzAsMy42MSwwLDcuMjMtLjIsMTAuODRhNi4zNCw2LjM0LDAsMCwxLTQuNjMsNiw3LjExLDcuMTEsMCwwLDEtNy41Mi0yLDUuNjEsNS42MSwwLDAsMS0xLjItMy4yMSwxMDIuNzcsMTAyLjc3LDAsMCwxLS40Mi0xMWMwLTMuOS0uMDYtNy44MS4xNi0xMS43MXMzLjI3LTcsNi44MS03YTcuNDgsNy40OCwwLDAsMSw3LDYuOUMxMjYuMjgsMzUuOTIsMTI2LjE5LDM5LjYyLDEyNi4xOSw0My4zMloiLz48cGF0aCBkPSJNNzYuMjcsNDNjMCwzLjU0LDAsNy4wOCwwLDEwLjYxYTYuMjgsNi4yOCwwLDAsMS00LDYuMjhjLTIuODIsMS4yNC01LjM1LjYtNy42Ny0xLjI3QTQuNDUsNC40NSwwLDAsMSw2My4wNyw1NmEyMi41MiwyMi41MiwwLDAsMS0uNDItNC4wOWMtLjE4LTYuNzQtLjM3LTEzLjQ4LjA1LTIwLjIxYTYuOSw2LjksMCwwLDEsNS43OS02LjE2YzMuMTItLjQsNy42OSwxLjc0LDcuNzQsNi4xNiwwLDEuOTEuMDksMy44My4xMSw1Ljc0czAsMy43NCwwLDUuNjFaIi8+PHBhdGggZD0iTTIwMC44LDE5NS42MWMtMy42NiwwLTcuMzIsMC0xMS0uMTdzLTUuOTEtMi4yNC02LjE3LTUuODlhMjA1LjM4LDIwNS4zOCwwLDAsMS0uMjEtMjIuMzNBNi42OSw2LjY5LDAsMCwxLDE4OCwxNjAuOWMyLjc0LTEuMDUsNS4yNC0uMjIsNy4zNCwxLjc2YTUuNTgsNS41OCwwLDAsMSwxLjc3LDRjLjE1LDQuNDkuMyw5LC4zNiwxMy40OCwwLDEuMDguMzIsMS4zOSwxLjQsMS40cTYuNTUuMTEsMTMuMS4zOGE2LjUxLDYuNTEsMCwwLDEsNi4zMyw1QTcuMDksNy4wOSwwLDAsMSwyMTUsMTk0LjdhNi4xMiw2LjEyLDAsMCwxLTIuNzQuNzNDMjA4LjQ1LDE5NS43MSwyMDQuNjMsMTk1LjU3LDIwMC44LDE5NS42MVoiLz48L2c+PC9zdmc+"
}

export default dateTimeIcon;