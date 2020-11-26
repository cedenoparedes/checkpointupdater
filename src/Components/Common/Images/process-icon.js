const processIcon = {
    processIcon: "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNjYuODYgMjYzLjUxIj48cGF0aCBkPSJNMTAxLjQ2LDgxbDguMDgsMi44NWExNC4zOSwxNC4zOSwwLDAsMSwzLDEuMTNjNCwyLjQ5LDcuMzQuMTMsMTAuNzUtMS4zOC42OC0uMywxLjEyLTEuMzEsMS40OS0yLjA3LDEuODUtMy44LDMuNjctNy42MSw1LjQzLTExLjQ1YTIuNDUsMi40NSwwLDAsMSwyLjU4LTEuNjlxNy4xLjEyLDE0LjE5LDBhMi40NywyLjQ3LDAsMCwxLDIuNTgsMS43YzEuODIsMy45NSwzLjYzLDcuOTEsNS42MiwxMS43N2E2LjkxLDYuOTEsMCwwLDAsMi40OSwyLjMzYzMuNjUsMi4zNCw3LjMxLDIuMTIsMTEuMTYuMjMsMi40Ny0xLjIyLDUuMjItMS44Niw3LjgtMi44NmEyLjgzLDIuODMsMCwwLDEsMy41My43cTQuNzcsNSw5Ljc2LDkuNzdhMi42LDIuNiwwLDAsMSwuNjcsMy4xOWMtMS40MiwzLjg1LTIuNzIsNy43My00LjE3LDExLjU2YTYuNjYsNi42NiwwLDAsMCwuMDgsNC41MWMxLjExLDMuODksMy41NCw2LjA2LDcuMjIsNy40MmE3MC42OSw3MC42OSwwLDAsMSw4LjUxLDQuMDksMi43NiwyLjc2LDAsMCwxLDEuMywxLjk0cS4wOCw3Ljc2LS4xNywxNS41MWMwLC41Ny0uODUsMS4zMi0xLjQ5LDEuNjQtMy44NywxLjkzLTcuODIsMy43LTExLjY3LDUuNjdhNi4yOSw2LjI5LDAsMCwwLTIuMjMsMi4zMiwxMC41NywxMC41NywwLDAsMC0uNDQsMTFjMS4zNCwyLjYyLDIsNS41NywzLjA2LDguMzRhMi43MiwyLjcyLDAsMCwxLS43OCwzLjM0Yy0zLjMyLDMuMTktNi41Niw2LjQ2LTkuNzYsOS43NmEyLjQ5LDIuNDksMCwwLDEtMy4xNC42NmMtNC4xNy0xLjYxLTguNDEtMy4wNy0xMi42NS00LjQ4YTUuNjgsNS42OCwwLDAsMC0yLjUyLjA3Yy0uNTQuMDktMSwuNTUtMS41Ni42Ni0zLjYyLjczLTUuMzMsMy4yOC02LjYsNi40OS0xLjE4LDMtMi43Niw1LjgxLTQuMDcsOC43NWEyLjQ5LDIuNDksMCwwLDEtMi42NywxLjU4Yy00LjY3LS4wNS05LjMzLS4wNy0xNCwwYTIuNDksMi40OSwwLDAsMS0yLjYyLTEuNjVjLTEuNzYtMy44NC0zLjYzLTcuNjMtNS40LTExLjQ3YTYuMiw2LjIsMCwwLDAtMi44My0yLjc4Yy0zLjgzLTIuMjUtNy40LTEuODMtMTEuMjIsMGE2OC43NSw2OC43NSwwLDAsMS04LjU0LDMsMi4zNCwyLjM0LDAsMCwxLTItLjQzcS01LjUxLTUuMzMtMTAuODMtMTAuODNhMi41OSwyLjU5LDAsMCwxLS4zMi0yLjE0cTItNi4yMSw0LjMxLTEyLjMyYTYuMzEsNi4zMSwwLDAsMCwwLTRjLTEuMDktNC4zMy00LTYuNTMtNy45Mi04LTIuNy0xLTUuMi0yLjQ4LTcuODMtMy42N2EyLjI1LDIuMjUsMCwwLDEtMS40Ny0yLjM1YzAtNC43OSwwLTkuNTksMC0xNC4zOWEyLjM1LDIuMzUsMCwwLDEsMS41Ni0yLjQ3YzQtMS44NCw4LTMuNzIsMTEuOTItNS43M2E3LjA4LDcuMDgsMCwwLDAsMi4xOS0yLjM1YzIuNjUtMy44NywxLjk0LTcuNzQuMTItMTEuNzRhNjYuODgsNjYuODgsMCwwLDEtMi44Ny04LjIsMi41NiwyLjU2LDAsMCwxLC40NC0yLjEyYzMuNDYtMy41OSw3LTcuMSwxMC41NS0xMC42QTYuNDMsNi40MywwLDAsMSwxMDEuNDYsODFaTTE0MCwxNTQuNzdjMTIuMTItLjEzLDIzLjYxLTkuNTcsMjIuNDQtMjQuOTEtLjc2LTEwLTguNzMtMjAuMDktMjIuNjItMjAuMjFhMjIuNTYsMjIuNTYsMCwwLDAsLjE4LDQ1LjEyWiIvPjxwYXRoIGQ9Ik0yMTEuNjQsMTk1LjI1Yy02LjE0LDE0LjY3LTEyLjE0LDI5LTE4LjI5LDQzLjcxYTE3LjYxLDE3LjYxLDAsMCwxLTEuMjQtMS41OWMtMS43LTIuODEtMy40LTUuNjEtNS04LjQ2LS42My0xLjExLTEuMTQtMS41LTIuNS0uODctMTgsOC4yNC0zNi45MywxMS42Mi01Ni41OSw5LjEtMzQuNTctNC40NC02MS4yMy0yMS41LTc5LjY1LTUxLjI1LS4yMi0uMzYtLjM5LS43Ni0uNzEtMS4zOWw1LjczLTMuMzJDNTcuMTgsMTc5LDYxLDE3Ni44LDY0LjgsMTc0LjUxYzEuMzQtLjgyLDItLjgxLDMsLjY3QTg0LjQyLDg0LjQyLDAsMCwwLDE1Ni44OSwyMTRjNS4zMy0xLjE0LDEwLjUtMy4wOCwxNS43LTQuNzcsMi4yMy0uNzMsMi4yMi0xLDEtMy4wOC0xLjA4LTEuODUtMi4xOC0zLjY5LTMuMjctNS41NC0xLjIxLTIuMDctMS4xLTIuMjksMS4zOC0yLjQ4bDkuMDYtLjY3cTE0LjYxLTEuMTEsMjkuMjQtMi4yMkMyMTAuMzUsMTk1LjE2LDIxMC43MSwxOTUuMjEsMjExLjY0LDE5NS4yNVoiLz48cGF0aCBkPSJNMTgzLjU2LDcyLjU4Yy04LjE1LTExLjkxLTE2LTIzLjM5LTI0LjE2LTM1LjM0bDQ3LjMyLTZjLS40Mi44OS0uNjIsMS4zOS0uODgsMS44NS0xLjQ3LDIuNjUtMyw1LjI4LTQuNDUsNy45Mi0xLjI4LDIuMjYtMS4yOSwyLjI2Ljc4LDMuNzRhMTA2LjY2LDEwNi42NiwwLDAsMSw0NC4yOSw4MS42NmMuMjcsNS42OC0uNDQsMTEuNDEtLjgsMTcuMTEtLjg2LDEzLjkzLTUuNTEsMjYuNy0xMS45MSwzOC45NC0xLjI5LDIuNDYtMS4zMiwyLjQ1LTMuNzcsMS01LTIuOS0xMC01Ljg0LTE1LjA2LTguNjktMS4yNC0uNy0xLjU2LTEuMjQtLjgtMi42MWE3Ni43Niw3Ni43NiwwLDAsMCw5LjE3LTI2LjVjLjc1LTUuMjcsMS42Ni0xMC42NSwxLjQxLTE1LjkyLS44Mi0xNy4xLTUuNjMtMzMtMTUuNjUtNDcuMUE4Ny4xNSw4Ny4xNSwwLDAsMCwxOTEsNjMuOTFjLTEuMjktMS0yLTEuMDgtMi44NC41NUMxODYuODMsNjcuMDksMTg1LjI3LDY5LjU5LDE4My41Niw3Mi41OFoiLz48cGF0aCBkPSJNNjYuNTMsMTIzLjU5LDQ4LjgsMTYxLjY2Yy0xMC4wNi0xMi41Ny0xOS4xNS0yNS4zLTI4LjQ2LTM3Ljg4LDMuNjEsMCw3LjIzLS4wNywxMC44NSwwLDEuODYsMCwyLjYxLS43NSwyLjgxLTIuNWE4OS4yMyw4OS4yMywwLDAsMSwxLjQ5LTExLjIyLDEzMS40OSwxMzEuNDksMCwwLDEsNS4xMi0xNy4zOUM1MS42MSw2NSw3MC45NCw0NS4xNCw5OC4yLDMzLjEzYTEwNS4wOSwxMDUuMDksMCwwLDEsMzkuODctOC41N2MxLjQ0LDAsMS44Ny40NiwxLjg1LDEuODQsMCw2LjA2LS4wNywxMi4xMiwwLDE4LjE4LDAsMS42OS0uNTYsMi4xNi0yLjE3LDIuMTlBODEsODEsMCwwLDAsOTcsNTguNUM3Ny4yMiw3MC40Niw2NC4xNSw4Ny42MSw1OC4xNSwxMTBjLS45MiwzLjQ1LTEuNzgsNi45My0yLjQ1LDEwLjQ0LS41MSwyLjY4LDAsMy4xMywyLjY5LDMuMTNaIi8+PC9zdmc+"
}

export default processIcon;