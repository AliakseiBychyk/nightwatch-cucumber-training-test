var nightwatchCucumber = require('nightwatch-cucumber')()

module.exports = {

    "src_folders": [nightwatchCucumber],
    "output_folder": "reports",
    "custom_commands_path": "",
    "custom_assertions_path": "",
    "page_objects_path": "pages",
    "globals_path": "",
    "closeSession": "afterScenario",

    "selenium": {
        "start_process": true,
        "server_path": "lib/selenium/sel-serv.jar",
        "start_session": true,
        "log_path": "log",
        "host": "127.0.0.1",
        "port": 4444,
        "cli_args": {
            "webdriver.chrome.driver": "lib/cromedriver.exe",
            "webdriver.ie.driver": ""
        }
    },

    "test_settings": {
        "default": {
            "globals": {
                "waitForConditionTimeout": 2000,
                "5sec": 5000
            },
            "launch_url": "http://localhost",
            "selenium_port": 4444,
            "selenium_host": "localhost",
            "silent": true,
            "screenshots": {
                "enabled": false,
                "on_failure": true,
                "on_error": false,
                "path": "screenshots/default"
            },
            "desiredCapabilities": {
                "browserName": "firefox",
                "javascriptEnabled": true,
                "acceptSslCerts": true
            }
        },

        "chrome": {
            "desiredCapabilities": {
                "browserName": "chrome",
                "javascriptEnabled": true,
                "acceptSslCerts": true
            }
        }
    }
}