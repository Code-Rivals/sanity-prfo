'use client'

import * as Notification from '@/components/ui/feedback/notification'
import { useNotification } from '@/hooks/common/use-notification'

const _NotificationProvider = Notification.Provider

function NotificationProvider() {
  const { notifications } = useNotification()

  return (
    <_NotificationProvider>
      {notifications.map(({ id, ...rest }) => {
        return <Notification.Root key={id} {...rest} />
      })}
      <Notification.Viewport />
    </_NotificationProvider>
  )
}

export { NotificationProvider }
