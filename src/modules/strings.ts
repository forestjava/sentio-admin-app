import LocalizedStrings from 'react-localization';

const strings = new LocalizedStrings({
  en:{
    "Up9qWK": "Re-send code",
    "peT0xQ": "Code from email",
    "lY4Zr1": "Please enter the code",
    "2ZbZpV": "Confirm your email",
    "O2i4J8": "Confirmation code",
    "nMSrxS": "Log in",
    "QWcB94": "Back",
    "FNtCxD": "Delete tenant",
    "Lb0tUu": "View tenant",
    "gGJTtF": "Managers",    
    "DGuB0b": "Nr of mediaflows",
    "9aJbh6": "Nr of skills",
    "wwBd0X": "Name",
    "ovYcxH": "ID",
    "MXjaMd": "Create tenant",
    "vDVP5a": "Tenants",
  },
});

/**
 * Returns the localized string
 * @param key 
 * @returns 
 */
export function t(key: string): string {
  return strings.getString(key)
}