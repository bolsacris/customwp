const newWeaponProps = {
  antiArmor: {
    label: 'CWP.antiArmor',
    isPhysical: false 
  },
  concealable: {
    label: 'CWP.concealable',
    isPhysical: false 
  },
  disarming: {
    label: 'CWP.disarming',
    isPhysical: false 
  },
  holdout: {
    label: 'CWP.holdout',
    isPhysical: false 
  },
  impactful: {
    label: 'CWP.impactful',
    isPhysical: false 
  },
  jointLocking: {
    label: 'CWP.jointLocking',
    isPhysical: false 
  },
  lobbed: {
    label: 'CWP.lobbed',
    isPhysical: false 
  },
  momentum: {
    label: 'CWP.momentum',
    isPhysical: false 
  },
  parrying: {
    label: 'CWP.parrying',
    isPhysical: false 
  },
  shoving: {
    label: 'CWP.shoving',
    isPhysical: false 
  },
  sweeping: {
    label: 'CWP.sweeping',
    isPhysical: false 
  },
  tripping: {
    label: 'CWP.tripping',
    isPhysical: false 
  },
  rangedTripping: {
    label: 'CWP.rangedTripping',
    isPhysical: false 
  },
  unhorsing: {
    label: 'CWP.unhorsing',
    isPhysical: false 
  },
  dragonHorn: {
    label: 'CWP.dragonHorn',
    isPhysical: false 
  },
  iron: {
    label: 'CWP.iron',
    isPhysical: false 
  },
  mithral: {
    label: 'CWP.mithral',
    isPhysical: false 
  },
  tether: {
    label: 'CWP.tether',
    isPhysical: false 
  }
}

Hooks.once("init", () => {
  foundry.utils.mergeObject(CONFIG.DND5E.itemProperties, newWeaponProps)

  for (const prop of Object.keys(newWeaponProps)) {
    CONFIG.DND5E.validProperties.weapon.add(prop);
  }
});








