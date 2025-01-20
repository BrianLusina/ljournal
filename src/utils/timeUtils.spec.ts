import { getTime24Hours, getTime12hours, getDuration } from './timeUtils';

describe('TimeUtils', () => {
  describe('getTime24Hours', () => {
    it('should return 22:01 when it is 1min passed 10 pm', () => {
      jest
        .spyOn(global.Date, 'now')
        .mockImplementationOnce(() => new Date('2019-11-18T22:01:00').valueOf());

      const actualTime = getTime24Hours();

      expect(actualTime).toEqual('22:01');
    });

    it('should return 10:01 when it is 1min passed 10 am', () => {
      jest
        .spyOn(global.Date, 'now')
        .mockImplementationOnce(() => new Date('2019-11-18T10:01:00').valueOf());

      const actualTime = getTime24Hours();

      expect(actualTime).toEqual('10:01');
    });
  });

  describe('getTime12hours', () => {
    it('should return 9:45am when it is 45 minutes passed 9am', () => {
      jest
        .spyOn(global.Date, 'now')
        .mockImplementationOnce(() => new Date('2019-11-18T09:45:00').valueOf());

      const actualTime = getTime12hours();

      expect(actualTime).toEqual('9:45am');
    });

    it('should return 9:30pm when it is 30 minutes passed 9', () => {
      jest
        .spyOn(global.Date, 'now')
        .mockImplementationOnce(() => new Date('2019-11-18T21:30:00').valueOf());

      const actualTime = getTime12hours();

      expect(actualTime).toEqual('9:30pm');
    });
  });

  describe('getDuration', () => {
    it('should return 0d 5h 300m 18000s for duration between 2021-07-16:13:00 and 2021-07-16:18:00', () => {
      const startTime = '2021-07-16:13:00';
      const endTime = '2021-07-16:18:00';
      const duration = getDuration(startTime, endTime);

      expect(duration).toEqual('0d 5h 300m 18000s');
    });
  });
});
