



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
