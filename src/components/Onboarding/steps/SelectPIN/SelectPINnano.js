// @flow
import React from 'react'
import { translate, Trans } from 'react-i18next'
import { i } from 'helpers/staticPath'

import InvertableImg from 'components/InvertableImg'
import Box from 'components/base/Box'
import Text from 'components/base/Text'

import type { T } from 'types/common'

import IconChevronRight from 'icons/ChevronRight'

import { getDeviceModel } from '@ledgerhq/devices'
import { IconOptionRow, DisclaimerBox, OptionRow, Inner } from '../../helperComponents'
import { configureAsNewDevice } from '../../../../config/nontranslatables'

type Props = {
  t: T,
}

const SelectPINnano = ({ t }: Props) => {
  const stepsLedgerNano = [
    {
      key: 'step1',
      icon: <IconOptionRow>{'1.'}</IconOptionRow>,
      desc: t('onboarding.selectPIN.initialize.instructions.nano.step1', getDeviceModel('nanoS')),
    },
    {
      key: 'step2',
      icon: <IconOptionRow>{'2.'}</IconOptionRow>,
      desc: (
        <Box style={{ display: 'block' }}>
          <Trans i18nKey="onboarding.selectPIN.initialize.instructions.nano.step2">
            {'Press the right button to select'}
            <Text ff="Open Sans|SemiBold" color="palette.text.shade100">
              {configureAsNewDevice}
            </Text>
          </Trans>
        </Box>
      ),
    },
    {
      key: 'step3',
      icon: <IconOptionRow>{'3.'}</IconOptionRow>,
      desc: t('onboarding.selectPIN.initialize.instructions.nano.step3'),
    },
    {
      key: 'step4',
      icon: <IconOptionRow>{'4.'}</IconOptionRow>,
      desc: t('onboarding.selectPIN.initialize.instructions.nano.step4'),
    },
  ]
  const disclaimerNotes = [
    {
      key: 'note1',
      icon: <IconChevronRight size={12} />,
      desc: t('onboarding.selectPIN.disclaimer.note1'),
    },
    {
      key: 'note2',
      icon: <IconChevronRight size={12} />,
      desc: t('onboarding.selectPIN.disclaimer.note2'),
    },
    {
      key: 'note3',
      icon: <IconChevronRight size={12} />,
      desc: t('onboarding.selectPIN.disclaimer.note3'),
    },
  ]

  return (
    <Box align="center" mt={3}>
      <Inner style={{ width: 700 }}>
        <InvertableImg alt="" src={i('select-pin-nano-onb.svg')} />
        <Box shrink grow flow={4} style={{ marginLeft: 40 }}>
          {stepsLedgerNano.map(step => (
            <OptionRow key={step.key} step={step} />
          ))}
        </Box>
      </Inner>
      <DisclaimerBox mt={6} disclaimerNotes={disclaimerNotes} color="palette.text.shade80" />
    </Box>
  )
}

export default translate()(SelectPINnano)
