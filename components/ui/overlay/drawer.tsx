// AlignUI Drawer v0.0.0

'use client'

import * as DialogPrimitive from '@radix-ui/react-dialog'
import { RiCloseLine } from '@remixicon/react'
import * as React from 'react'

import * as CompactButton from '@/components/ui/buttons/compact-button'
import { cn } from '@/lib/utils/cn'

const DrawerRoot = DialogPrimitive.Root
DrawerRoot.displayName = 'Drawer'

const DrawerTrigger = DialogPrimitive.Trigger
DrawerTrigger.displayName = 'DrawerTrigger'

const DrawerClose = DialogPrimitive.Close
DrawerClose.displayName = 'DrawerClose'

const DrawerPortal = DialogPrimitive.Portal
DrawerPortal.displayName = 'DrawerPortal'

function DrawerOverlay({
  ref: forwardedRef,
  className,
  ...rest
}: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay> & {
  ref?: React.RefObject<React.ComponentRef<
    typeof DialogPrimitive.Overlay
  > | null>
}) {
  return (
    <DialogPrimitive.Overlay
      ref={forwardedRef}
      className={cn(
        // base
        'fixed inset-0 z-50 grid grid-cols-1 place-items-end overflow-hidden bg-overlay backdrop-blur-[10px]',
        // animation
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        className,
      )}
      {...rest}
    />
  )
}
DrawerOverlay.displayName = 'DrawerOverlay'

function DrawerContent({
  ref: forwardedRef,
  className,
  children,
  ...rest
}: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
  ref?: React.RefObject<React.ComponentRef<
    typeof DialogPrimitive.Content
  > | null>
}) {
  return (
    <DrawerPortal>
      <DrawerOverlay>
        <DialogPrimitive.Content
          ref={forwardedRef}
          className={cn(
            // base
            'size-full max-w-[400px] overflow-y-auto',
            'border-l border-stroke-soft-200 bg-bg-white-0',
            // animation
            'data-[state=open]:duration-200 data-[state=open]:ease-out data-[state=open]:animate-in',
            'data-[state=closed]:duration-200 data-[state=closed]:ease-in data-[state=closed]:animate-out',
            'data-[state=open]:slide-in-from-right-full',
            'data-[state=closed]:slide-out-to-right-full',
            className,
          )}
          {...rest}
        >
          <div className="relative flex size-full flex-col">{children}</div>
        </DialogPrimitive.Content>
      </DrawerOverlay>
    </DrawerPortal>
  )
}
DrawerContent.displayName = 'DrawerContent'

function DrawerHeader({
  className,
  children,
  showCloseButton = true,
  ...rest
}: React.HTMLAttributes<HTMLDivElement> & {
  showCloseButton?: boolean
}) {
  return (
    <div
      className={cn(
        'flex items-center gap-3 border-stroke-soft-200 p-5',
        className,
      )}
      {...rest}
    >
      {children}

      {showCloseButton && (
        <DrawerClose asChild>
          <CompactButton.Root variant="ghost" size="large">
            <CompactButton.Icon as={RiCloseLine} />
          </CompactButton.Root>
        </DrawerClose>
      )}
    </div>
  )
}
DrawerHeader.displayName = 'DrawerHeader'

function DrawerTitle({
  ref: forwardedRef,
  className,
  ...rest
}: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title> & {
  ref?: React.RefObject<React.ComponentRef<
    typeof DialogPrimitive.Title
  > | null>
}) {
  return (
    <DialogPrimitive.Title
      ref={forwardedRef}
      className={cn('flex-1 text-label-lg text-text-strong-950', className)}
      {...rest}
    />
  )
}
DrawerTitle.displayName = 'DrawerTitle'

function DrawerBody({
  className,
  children,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('flex-1', className)} {...rest}>
      {children}
    </div>
  )
}
DrawerBody.displayName = 'DrawerBody'

function DrawerFooter({
  className,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'flex items-center gap-4 border-stroke-soft-200 p-5',
        className,
      )}
      {...rest}
    />
  )
}
DrawerFooter.displayName = 'DrawerFooter'

export {
  DrawerBody as Body,
  DrawerClose as Close,
  DrawerContent as Content,
  DrawerFooter as Footer,
  DrawerHeader as Header,
  DrawerRoot as Root,
  DrawerTitle as Title,
  DrawerTrigger as Trigger,
}
