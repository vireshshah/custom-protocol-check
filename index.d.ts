declare module 'custom-protocol-check' {
  function customProtocolCheck(uri: string, failCb?: () => void, successCb?: () => void, timeout?: number, unsupportedCb?: () => void): void

  export default customProtocolCheck
}
