
import { 
    validateEmail,
    validatePhoneNumber
  } from './validations'
  
  describe('validateEmail', () => {
      it('return true for correct email address', async () => {
          const isValid = validateEmail('sameera@grr.la');
          expect(isValid).toBeTruthy();
      });

      it('return false for incorrect email address', async () => {
        const isValid = validateEmail('sameera*grr$l');
        expect(isValid).toBeFalsy();
    });
  });

  describe('validatePhoneNumber', () => {
    it('return true for correct phone number', async () => {
        const isValid = validatePhoneNumber('0776655523');
        expect(isValid).toBeTruthy();
    });

    it('return false for incorrect phone number', async () => {
      const isValid = validatePhoneNumber('s2321');
      expect(isValid).toBeFalsy();
  });
});