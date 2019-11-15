# Password Analyzer Tool

**Run:** `node pa_tool.js`

**Testing:** https://semantic-ui.com/examples/login.html

## Resources:
**Compromised Passwords:** https://www.ncsc.gov.uk/static-assets/documents/PwnedPasswordTop100k.txt

**Study on habits:** 

      https://wpengine.com/unmasked/
      
      https://blog.dashlane.com/virginia-tech-passwords-study/

**API:** https://haveibeenpwned.com/API/v3#PwnedPasswords


Requirements
1) Use MongoDB text index to compute similarities
2) Compare similarities between input password and database (define similarities)
3) Analyze general password habits

            a) Password Walking

            b) Vulnerable to dictionary attack (Single words/Short phrases)

            c) All numbers/ simple string + number(s)
      
4) Combine analysis to create report for user
5) UI display for password report
