## Test by PostMan

### Body
```json
{
    "notification": {
        "title": "Ebrahimi - Test",
        "body": "Ebrahimi - Test Notification",
        "click_action": "https://ir.linkedin.com/in/omid-ebrahimi-27886457",
        "icon": "https://media.licdn.com/dms/image/C5103AQGKO9a_l1NWmA/profile-displayphoto-shrink_200_200/0?e=1566432000&v=beta&t=4wdYVJD-CyS0aaZyi73v2AMzmYzBGdC80hyhWdjWV2s"
    },
    "data": {
    	"customKey": "custom value"
    },
    "to": "--- Browser Token ---"
}
```
### Header
```text
Content-Type:application/json
Authorization:key=<--- Server key --->
```
