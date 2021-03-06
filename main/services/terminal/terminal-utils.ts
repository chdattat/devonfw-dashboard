import {
  CMD_LS,
  CMD_DIR,
  Command,
  CMD_XCOPY,
  CMD_CP,
} from './terminal-commands';

const WINDOWS_OS = 'win32';

function isNotEmpty(str: string) {
  return str != '\x0d' && !!str;
}

export function dirStringToArray(dirs: string) {
  return dirs.split('\n').filter(isNotEmpty);
}

export function lsOS(): Command {
  let isWin = process.platform === WINDOWS_OS;
  let cmd = CMD_LS;

  if (isWin) {
    cmd = CMD_DIR;
  }

  return cmd;
}

export function cpOS(): Command {
  let isWin = process.platform === WINDOWS_OS;
  let cmd = CMD_CP;

  if (isWin) {
    cmd = CMD_XCOPY;
  }

  return cmd;
}

export function getOptions(opts: {}): {} | undefined {
  let options = {};

  for (const key of Object.keys(opts)) {
    const value = opts[key];
    if (!!value) {
      options[key] = value;
    }
  }

  return options ? options : undefined;
}
