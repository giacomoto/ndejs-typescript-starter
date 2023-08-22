import 'dotenv/config'

function getEnv(key: string): string | undefined {
  return process.env[key]
}

export const config = {
  app: {
    env: getEnv('ENV'),
  },
}
