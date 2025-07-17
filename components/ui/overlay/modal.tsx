// AlignUI Modal v0.0.0

import * as DialogPrimitive from '@radix-ui/react-dialog'
import { type RemixiconComponentType, RiCloseLine } from '@remixicon/react'
import * as React from 'react'

import * as CompactButton from '@/components/ui/buttons/compact-button'
import { cn } from '@/lib/utils/cn'

const ModalRoot = DialogPrimitive.Root
const ModalTrigger = DialogPrimitive.Trigger
const ModalClose = DialogPrimitive.Close
const ModalPortal = DialogPrimitive.Portal

function ModalOverlay({
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
        'fixed inset-0 z-50 flex flex-col items-center justify-center overflow-y-auto bg-overlay p-4 backdrop-blur-[10px]',
        // animation
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        className,
      )}
      {...rest}
    />
  )
}
ModalOverlay.displayName = 'ModalOverlay'

function ModalContent({
  ref: forwardedRef,
  className,
  overlayClassName,
  children,
  showClose = true,
  ...rest
}: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
  overlayClassName?: string
  showClose?: boolean
} & {
  ref?: React.RefObject<React.ComponentRef<
    typeof DialogPrimitive.Content
  > | null>
}) {
  return (
    <ModalPortal>
      <ModalOverlay className={overlayClassName}>
        <DialogPrimitive.Content
          ref={forwardedRef}
          className={cn(
            // base
            'relative w-full max-w-[400px]',
            'rounded-20 bg-bg-white-0 shadow-regular-md',
            // focus
            'focus:outline-none',
            // animation
            'data-[state=open]:animate-in data-[state=closed]:animate-out',
            'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
            'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
            className,
          )}
          {...rest}
        >
          {children}
          {showClose && (
            <ModalClose asChild>
              <CompactButton.Root
                variant="ghost"
                size="large"
                className="absolute right-4 top-4"
              >
                <CompactButton.Icon as={RiCloseLine} />
              </CompactButton.Root>
            </ModalClose>
          )}
        </DialogPrimitive.Content>
      </ModalOverlay>
    </ModalPortal>
  )
}
ModalContent.displayName = 'ModalContent'

function ModalHeader({
  className,
  children,
  icon: Icon,
  title,
  description,
  ...rest
}: React.HTMLAttributes<HTMLDivElement> & {
  icon?: RemixiconComponentType
  title?: string
  description?: string
}) {
  return (
    <div
      className={cn(
        'relative flex items-start gap-3.5 py-4 pl-5 pr-14 before:absolute before:inset-x-0 before:bottom-0 before:border-b before:border-stroke-soft-200',
        className,
      )}
      {...rest}
    >
      {children || (
        <>
          {Icon && (
            <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-bg-white-0 ring-1 ring-inset ring-stroke-soft-200">
              <Icon className="size-5 text-text-sub-600" />
            </div>
          )}
          {(title || description) && (
            <div className="flex-1 space-y-1">
              {title && <ModalTitle>{title}</ModalTitle>}
              {description && (
                <ModalDescription>{description}</ModalDescription>
              )}
            </div>
          )}
        </>
      )}
    </div>
  )
}
ModalHeader.displayName = 'ModalHeader'

function ModalTitle({
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
      className={cn('text-label-sm text-text-strong-950', className)}
      {...rest}
    />
  )
}
ModalTitle.displayName = 'ModalTitle'

function ModalDescription({
  ref: forwardedRef,
  className,
  ...rest
}: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description> & {
  ref?: React.RefObject<React.ComponentRef<
    typeof DialogPrimitive.Description
  > | null>
}) {
  return (
    <DialogPrimitive.Description
      ref={forwardedRef}
      className={cn('text-paragraph-xs text-text-sub-600', className)}
      {...rest}
    />
  )
}
ModalDescription.displayName = 'ModalDescription'

function ModalBody({
  className,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('p-5', className)} {...rest} />
}
ModalBody.displayName = 'ModalBody'

function ModalFooter({
  className,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'flex items-center justify-between gap-3 border-t border-stroke-soft-200 px-5 py-4',
        className,
      )}
      {...rest}
    />
  )
}

ModalFooter.displayName = 'ModalFooter'

export {
  ModalBody as Body,
  ModalClose as Close,
  ModalContent as Content,
  ModalDescription as Description,
  ModalFooter as Footer,
  ModalHeader as Header,
  ModalOverlay as Overlay,
  ModalPortal as Portal,
  ModalRoot as Root,
  ModalTitle as Title,
  ModalTrigger as Trigger,
}
