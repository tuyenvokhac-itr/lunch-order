export const ENTITY_NAME = {
  USER: 'users',
};

export enum APP_MESSAGE_CODE {
  SSO_SUCCESS_200_001 = 'SSO_SUCCESS_200_001',
  SSO_SUCCESS_200_002 = 'SSO_SUCCESS_200_002',
  SSO_SUCCESS_200_003 = 'SSO_SUCCESS_200_003',
  SSO_SUCCESS_200_004 = 'SSO_SUCCESS_200_004',
  SSO_SUCCESS_201_001 = 'SSO_SUCCESS_201_001',
}

export const APP_MESSAGES: Record<string, string> = {
  [APP_MESSAGE_CODE.SSO_SUCCESS_200_001]:
    'The request has been processed successfully.',
  [APP_MESSAGE_CODE.SSO_SUCCESS_201_001]: 'User created successfully.',
  [APP_MESSAGE_CODE.SSO_SUCCESS_200_002]: 'Your account is activated.',
  [APP_MESSAGE_CODE.SSO_SUCCESS_200_003]: 'Login successfully.',

  [APP_MESSAGE_CODE.SSO_SUCCESS_200_004]: 'OTP has been sent successfully.',
};

export enum APP_ERROR_CODE {
  SSO_ERROR_500_001 = 'SSO_ERROR_500_001',
  SSO_ERROR_400_001 = 'SSO_ERROR_400_001',
  SSO_ERROR_400_002 = 'SSO_ERROR_400_002',
  SSO_ERROR_400_003 = 'SSO_ERROR_400_003',
  SSO_ERROR_400_004 = 'SSO_ERROR_400_004',
  SSO_ERROR_400_005 = 'SSO_ERROR_400_005',
  SSO_ERROR_400_006 = 'SSO_ERROR_400_006',
  SSO_ERROR_400_007 = 'SSO_ERROR_400_007',
  SSO_ERROR_400_008 = 'SSO_ERROR_400_008',
  SSO_ERROR_400_009 = 'SSO_ERROR_400_009',
  SSO_ERROR_400_010 = 'SSO_ERROR_400_010',
  SSO_ERROR_400_011 = 'SSO_ERROR_400_011',
  SSO_ERROR_401_001 = 'SSO_ERROR_401_001',
  SSO_ERROR_403_001 = 'SSO_ERROR_403_001',
  SSO_ERROR_403_002 = 'SSO_ERROR_403_002',
  SSO_ERROR_404_001 = 'SSO_ERROR_404_001',
  SSO_ERROR_404_002 = 'SSO_ERROR_404_002',
  SSO_ERROR_404_004 = 'SSO_ERROR_404_004',
  SSO_ERROR_404_003 = 'SSO_ERROR_404_003',
  SSO_ERROR_409_001 = 'SSO_ERROR_409_001',
  SSO_ERROR_409_002 = 'SSO_ERROR_409_002',
}

export const APP_ERROR_MESSAGES: Record<string, string> = {
  [APP_ERROR_CODE.SSO_ERROR_500_001]: 'Something went wrong.',
  [APP_ERROR_CODE.SSO_ERROR_400_001]: 'Invalid data format.',
  [APP_ERROR_CODE.SSO_ERROR_400_002]: 'Account is already activated.',
  [APP_ERROR_CODE.SSO_ERROR_400_003]: 'OTP is expired.',
  [APP_ERROR_CODE.SSO_ERROR_400_004]: 'OTP has already used.',
  [APP_ERROR_CODE.SSO_ERROR_400_005]:
    'You have inputted the wrong OTP, please check your email.',
  [APP_ERROR_CODE.SSO_ERROR_400_006]: 'Invalid phone number format.',
  [APP_ERROR_CODE.SSO_ERROR_400_007]: 'The request has been processed fail.',
  [APP_ERROR_CODE.SSO_ERROR_400_008]: 'Incorrect password.',
  [APP_ERROR_CODE.SSO_ERROR_400_009]: 'Avatar too big.',
  [APP_ERROR_CODE.SSO_ERROR_400_010]: 'Invalid SNS token format.',
  [APP_ERROR_CODE.SSO_ERROR_400_011]:
    'Your account is linked to a deleted account, you can register another one.',
  [APP_ERROR_CODE.SSO_ERROR_401_001]: 'Invalid or expired token provided.',
  [APP_ERROR_CODE.SSO_ERROR_403_001]: 'Login failed.',
  [APP_ERROR_CODE.SSO_ERROR_403_002]:
    'Account creation reaches the limitation.',

  [APP_ERROR_CODE.SSO_ERROR_404_001]:
    'Your account is not activated. Please check email for activation.',
  [APP_ERROR_CODE.SSO_ERROR_404_002]: 'User not found.',
  [APP_ERROR_CODE.SSO_ERROR_404_003]: 'Refresh token not found.',
  [APP_ERROR_CODE.SSO_ERROR_404_004]: 'File not found.',
  [APP_ERROR_CODE.SSO_ERROR_409_001]: 'Email already existed.',
  [APP_ERROR_CODE.SSO_ERROR_409_002]: 'This phone number is already used',
};
