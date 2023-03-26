document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('button')
    console.log(button);

    button.addEventListener('click', () => {
        
        chrome.privacy.services.safeBrowsingEnabled.get({}, function(details) {
            if (details.value) {
              console.log('safe browsing is on!');
            } else {
              console.log('Autofill is off!');
            }
          });

        chrome.privacy.services.safeBrowsingEnabled.set({ value: true }, function() {
            if (chrome.runtime.lastError === undefined) {
                document.getElementById('safeBrowsing').innerText='ON';
            } else {
                //console.log("didnt work", chrome.runtime.lastError);
            }
        })


        chrome.privacy.websites.doNotTrackEnabled.get({}, function(details) {
            if (details.value) {
              console.log('Do not track is on!');
            } else {
              console.log('Do not track is off!');
            }
          });

        chrome.privacy.websites.doNotTrackEnabled.set({ value: true }, function() {
            if (chrome.runtime.lastError === undefined) {
                document.getElementById('doNotTrack').innerText='ON';

            } else {
                console.log("didnt work", chrome.runtime.lastError);
            }
        })

        chrome.privacy.services.autofillAddressEnabled.get({}, function(details) {
            if (details.value) {
              console.log('Do not track is on!');
            } else {
              console.log('Do not track is off!');
            }
          });
        
        chrome.privacy.services.autofillAddressEnabled.set({ value: false }, function() {
            if (chrome.runtime.lastError === undefined) {
                document.getElementById('autoFillAddy').innerText='OFF';
            } else {
                console.log("didnt work", chrome.runtime.lastError);
            }
        })

        chrome.privacy.services.autofillCreditCardEnabled.get({}, function(details) {
            if (details.value) {
              console.log('Do not track is on!');
            } else {
              console.log('Do not track is off!');
            }
          });
        
        chrome.privacy.services.autofillCreditCardEnabled.set({ value: false }, function() {
            if (chrome.runtime.lastError === undefined) {
                console.log("it worked");
                document.getElementById('autoFillCredit').innerText='OFF';
            } else {
                console.log("didnt work", chrome.runtime.lastError);
            }
        })

    });
});