class DemoClass:
    def __init__(self):
        self.num = 2
    def setnum(self, num):
        self.num = num
    def getnum(self):
        return self.num
    
d = DemoClass()
d.setnum(3)
print(d.getnum())