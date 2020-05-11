Use Univeral to have an app run in native on both ipad and iphone
w/o universal -- app will run in an iphone-emulator like-state
XCode -> Target -> deployment


errors: 
Invalid Bundle. iPad Multitasking support requires these orientations: 'UIInterfaceOrientationPortrait,UIInterfaceOrientationPortraitUpsideDown,UIInterfaceOrientationLandscapeLeft,UIInterfaceOrientationLandscapeRight'. Found 'UIInterfaceOrientationPortrait,UIInterfaceOrientationPortraitUpsideDown' in bundle 'com.bitscoffee.PhotoMarks.iOS'.
solution: --> iPad Multitasking support requires all the orientations but your app does not, so you need to opt out of it, just add the UIRequiresFullScreen key to your Xcode project’s Info.plist file and apply the Boolean value YES.

find your UUID
ituens -> plug in device -> click on serial number -> UUID will pop up


---
adding devices for testing
https://support.smartbear.com/testcomplete/docs/app-testing/mobile/ios/preparing/registering-devices.html

