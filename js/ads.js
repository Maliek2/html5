
      window.googletag = window.googletag || {cmd: []};

      // GPT ad slots
      var interstitialSlot, staticSlot;

      googletag.cmd.push(function() {
        // Define a web interstitial ad slot.
        interstitialSlot = googletag.defineOutOfPageSlot(
            '/6355419/Travel/Europe/France/Paris',
            googletag.enums.OutOfPageFormat.INTERSTITIAL);

        // Slot returns null if the page or device does not support interstitials.
        if (interstitialSlot) {
          interstitialSlot.addService(googletag.pubads());

          document.getElementById('status').innerText = 'Interstitial is loading...';

          // Add event listener to enable navigation once the interstitial loads.
          // If this event doesn't fire, try clearing local storage and refreshing
          // the page.
          googletag.pubads().addEventListener('slotOnload', function(event) {
            if (interstitialSlot === event.slot) {
              document.getElementById('link').style.display = 'block';
              document.getElementById('status').innerText = 'Interstitial is loaded.';
            }
          });
        }

        // Define static ad slots.
        staticSlot = googletag.defineSlot(
            '/6355419/Travel/Europe', [100, 100], 'static-ad-1')
          .addService(googletag.pubads());

        // Enable SRA and services.
        googletag.pubads().enableSingleRequest();
        googletag.enableServices();
      });
    

        googletag.pubads().setPrivacySettings({
  restrictDataProcessing: true,
});

// Set multiple privacy settings at the same time.
googletag.pubads().setPrivacySettings({
  childDirectedTreatment: true,
  underAgeOfConsent: true
});

// Clear the configuration for childDirectedTreatment.
googletag.pubads().setPrivacySettings({
  childDirectedTreatment: null
});
