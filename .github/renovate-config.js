module.exports = {
  dryRun: false,
  username: "cyr-ius",
  gitAuthor: "cyr-ius@ipocus.net",
  onboarding: false,
  platform: "github",
  repositories: ["cyr-ius/truecharts-charts"],
  packageRules: [
    {
      description: "lockFileMaintenance",
      matchUpdateTypes: [
        "pin",
        "digest",
        "patch",
        "minor",
        "major",
        "lockFileMaintenance",
      ],
      dependencyDashboardApproval: false,
      stabilityDays: 0,
    },
  ],
};
