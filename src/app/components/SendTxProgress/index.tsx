/**
 *
 * SendTxProgress
 *
 */
import React from 'react';
import { Icon } from '@blueprintjs/core';
import { TransactionStatus } from '../../../types/transaction-status';
import { LinkToExplorer } from '../LinkToExplorer';

interface Props {
  status: TransactionStatus;
  txHash: string;
  loading: boolean;
}

export function SendTxProgress(props: Props) {
  return (
    <>
      {props.status !== TransactionStatus.NONE}
      <div className="d-flex flex-row align-items-center">
        {(props.status === TransactionStatus.PENDING_FOR_USER ||
          props.status === TransactionStatus.PENDING) && <Icon icon="time" />}
        {props.status === TransactionStatus.SUCCESS && <Icon icon="tick" />}
        {props.status === TransactionStatus.ERROR && <Icon icon="error" />}
        {props.txHash && <LinkToExplorer txHash={props.txHash} />}
      </div>
    </>
  );
}

SendTxProgress.defaultProps = {
  status: TransactionStatus.NONE,
  txHash: null,
  loading: false,
};
