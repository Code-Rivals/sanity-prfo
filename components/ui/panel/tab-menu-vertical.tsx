'use client'

import type { PolymorphicComponentProps } from '@/lib/utils/polymorphic'
import * as TabsPrimitive from '@radix-ui/react-tabs'

import * as React from 'react'
import { cn } from '@/lib/utils/cn'

const TabMenuVerticalContent = TabsPrimitive.Content
TabMenuVerticalContent.displayName = 'TabMenuVerticalContent'

type TabMenuVerticalRootProps = Omit<
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root>,
  'orientation'
>

function TabMenuVerticalRoot({
  ref: forwardedRef,
  ...rest
}: TabMenuVerticalRootProps & {
  ref?: React.RefObject<React.ComponentRef<typeof TabsPrimitive.Root> | null>
}) {
  return (
    <TabsPrimitive.Root ref={forwardedRef} orientation="vertical" {...rest} />
  )
}
TabMenuVerticalRoot.displayName = 'TabMenuVerticalRoot'

function TabMenuVerticalList({
  ref: forwardedRef,
  className,
  ...rest
}: React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> & {
  ref?: React.RefObject<React.ComponentRef<typeof TabsPrimitive.List> | null>
}) {
  return (
    <TabsPrimitive.List
      ref={forwardedRef}
      className={cn('w-full space-y-2', className)}
      {...rest}
    />
  )
}
TabMenuVerticalList.displayName = 'TabMenuVerticalList'

function TabMenuVerticalTrigger({
  ref: forwardedRef,
  className,
  ...rest
}: React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> & {
  ref?: React.RefObject<React.ComponentRef<
    typeof TabsPrimitive.Trigger
  > | null>
}) {
  return (
    <TabsPrimitive.Trigger
      ref={forwardedRef}
      className={cn(
        // base
        'group/tab-item w-full rounded-lg p-2 text-left text-label-sm text-text-sub-600 outline-none',
        'grid auto-cols-auto grid-flow-col grid-cols-[auto,minmax(0,1fr)] items-center gap-1.5',
        'transition duration-200 ease-out',
        // hover
        'hover:bg-bg-weak-50',
        // focus
        'focus:outline-none',
        // active
        'data-[state=active]:bg-bg-weak-50 data-[state=active]:text-text-strong-950',
        className,
      )}
      {...rest}
    />
  )
}
TabMenuVerticalTrigger.displayName = 'TabMenuVerticalTrigger'

function TabMenuVerticalIcon<T extends React.ElementType>({
  className,
  as,
  ...rest
}: PolymorphicComponentProps<T>) {
  const Component = as || 'div'

  return (
    <Component
      className={cn(
        // base
        'size-5 text-text-sub-600',
        'transition duration-200 ease-out',
        // active
        'group-data-[state=active]/tab-item:text-primary-base',
        className,
      )}
      {...rest}
    />
  )
}
TabMenuVerticalIcon.displayName = 'TabsVerticalIcon'

function TabMenuVerticalArrowIcon<T extends React.ElementType>({
  className,
  as,
  ...rest
}: PolymorphicComponentProps<T>) {
  const Component = as || 'div'

  return (
    <Component
      className={cn(
        // base
        'size-5 p-px text-text-sub-600',
        'rounded-full bg-bg-white-0 opacity-0 shadow-regular-xs',
        'scale-75 transition ease-out',
        // active
        'group-data-[state=active]/tab-item:scale-100 group-data-[state=active]/tab-item:opacity-100',
        className,
      )}
      {...rest}
    />
  )
}
TabMenuVerticalArrowIcon.displayName = 'TabMenuVerticalArrowIcon'

export {
  TabMenuVerticalArrowIcon as ArrowIcon,
  TabMenuVerticalContent as Content,
  TabMenuVerticalIcon as Icon,
  TabMenuVerticalList as List,
  TabMenuVerticalRoot as Root,
  TabMenuVerticalTrigger as Trigger,
}
