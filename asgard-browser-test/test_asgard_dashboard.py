import unittest
import time
from selenium import webdriver
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
from selenium.webdriver.common.keys import Keys

class AsgardDashboard(unittest.TestCase):
    def setUp(self):
        # self.driver = webdriver.Remote(command_executor='http://127.0.0.1:5000/', desired_capabilities=DesiredCapabilities.CHROME)
        self.driver = webdriver.Chrome()
    
    def test_navigate_to_TODO(self):
        driver = self.driver
        driver.get('http://localhost:5000/')
        self.assertIn("asgard", driver.title)

    def tearDown(self):
        self.driver.close()

if __name__ == "__main__":
    unittest.main()
